require 'prawn'

module Jekyll
    Hooks.register :site, :post_write do |site|
        Prawn::Document.generate("#{site.dest}/assets/henrik-becker.pdf", margin: 40) do |pdf|
            puts "      Generating CV as PDF..."
            pdf.extend(Prawn::DesignSystem)
            pdf.register_fonts(site)
            pdf.masthead(site)
            pdf.introduction(site)
            pdf.core_competencies(site)
            pdf.featured_projects(site)
            pdf.professional_context(site)
            pdf.professional_experience(site)
    end
  end
end

module Prawn
    module DesignSystem
        # --------------------------------------------
        # TYPOGRAPHY
        # --------------------------------------------
        def register_fonts(site)
            fonts_dir = "#{site.dest}/assets/fonts"
            font_families.update(
            "IBM Plex Sans" => {
                normal: { file: "#{fonts_dir}/IBMPlexSans-Regular.ttf", subset: false },
                medium: { file: "#{fonts_dir}/IBMPlexSans-Medium.ttf",  subset: false }
            })
        end
        
        def config
            @config ||= {
                border_radius: 0,
                text_color: '010101',
                primary_color: '5F6F67', 
                spacing: space(5),
                leading: 2,
                font_size: 11
            }
        end


        # CSS → PDF spacing scale (tweak as needed)
        def space(n)
            {
                1 => 4,
                2 => 8,
                3 => 12,
                4 => 16,
                5 => 24
            }[n] || 8
        end


        # --------------------------------------------
        # TEXT PRIMITIVES
        # --------------------------------------------
        def body(text)
            font("IBM Plex Sans", style: :normal) do
                text(text, size: config[:font_size], leading: config[:leading], color: config[:text_color])
            end
        end

        def bold(text)
            font("IBM Plex Sans", style: :medium) do
                text(text, size: config[:font_size], leading: config[:leading], color: config[:text_color])
            end
        end

        def small(text)
            font("IBM Plex Sans", style: :normal) do
                text(text, size: config[:font_size] - 2, color: config[:text_color])
            end
        end

        def link(text, url) 
            font("IBM Plex Sans", style: :normal) do
                text("<link href='#{url}'>#{text}</link>", 
                    size: config[:font_size], 
                    leading: config[:leading], 
                    color: config[:primary_color], 
                    inline_format: true
                )
            end
        end

        # --------------------------------------------
        # HEADINGS
        # --------------------------------------------
        def heading(level, text)
            sizes = {
                1 => 24,
                2 => 18,
                3 => 14,
                4 => 12,
                5 => 10,
                6 => 10
            }

            weights = {
                1 => :normal, # 400
                2 => :normal,
                3 => :normal,
                4 => :normal,
                5 => :medium, # 500
                6 => :medium
            }

            font("IBM Plex Sans", style: weights[level]) do
                text(text, size: sizes[level], letter_spacing: 1.5, color: config[:text_color])
            end

            if level < 3
                move_down space(2)
            end
        end

        def h1(text) = heading(1, text)
        def h2(text) 
            heading(2, text)
            rule()
        end
        def h3(text) = heading(3, text)
        def h4(text) = heading(4, text)
        def h5(text) = heading(5, text)
        def h6(text) = heading(6, text)            


        # --------------------------------------------
        # RULE / SEPARATOR
        # --------------------------------------------
        def rule(color: config[:primary_color])
            stroke_color color
            stroke_horizontal_rule
            move_down space(3)
        end

        # --------------------------------------------
        # SECTION
        # --------------------------------------------
        def section(title)
            h2(title)
            yield
            move_down space(4)
        end

        # --------------------------------------------
        # TWO-COLUMN LAYOUT
        # --------------------------------------------
        def two_column(left_proc, right_proc, ratio: 0.5, spacing: space(5))
            left_width  = bounds.width * ratio
            right_width = bounds.width * (1 - ratio)

            left_box = bounding_box([bounds.left, bounds.top], width: left_width) do
                left_proc.call
            end

            right_box = bounding_box([bounds.left + left_width, bounds.top], width: right_width) do
                right_proc.call
            end
        end
     
        def masthead(site)
            border_color = config[:primary_color]
            border_radius = config[:border_radius]
            border_width = 0.5
            img_path = "#{site.dest}/assets/img/portrait-800x1199.jpg"
            img_scale = 6
            img_width = 800 / img_scale
            spacing = config[:spacing]

            bounding_box([bounds.left, cursor], width: bounds.width) do
                # Content
                two_column(
                    -> {
                        # Padding
                        bounding_box([bounds.left + spacing, bounds.top - spacing], width: bounds.width - (spacing * 2)) do                            
                            person      = site.data['person']
                            profile     = site.data['profile']
                            name        = person['name']
                            title       = person['jobTitle']
                            phone       = person['telephone']
                            url         = person['url']
                            h1(name)
                            h3(title)
                            link(phone, "tel:#{phone}")
                            link("contact@henrikbecker.se", "mailto:contact@henrikbecker.se")
                            link(url.gsub('https://', ''), url)
                            profile['same_as'].each do |social|
                                link(social['url'].gsub('https://', '').gsub('www.', ''), social['url'])
                            end
                        end
                    },
                    -> {
                        image img_path, width: img_width, position: :right
                    },
                    ratio: 0.7
                )

                # Border
                stroke_color(border_color)
                line_width(border_width)
                rounded_rectangle([bounds.left, bounds.top], bounds.width, bounds.height, border_radius)
                stroke()
            end

            move_down spacing
        end

        def introduction(site) 
            section('Introduction') do
                person = site.data['person']
                body(person['description'])
            end
        end

        def core_competencies(site) 
            section('Core Competencies') do
                person = site.data['person']
                profile = site.data['profile']
                profile['coreSkills'].each do |category|
                    if category['skills']
                        body("- #{category['name']} (#{category['skills'].join(', ')})")
                    else
                        body("- #{category['name']}")
                    end
                end
            end
        end

        def featured_projects(site)
            start_new_page()
            section('Featured Projects') do
                profile = site.data['profile']
                projects = site.collections['projects'].docs
                profile['featuredProjects'].each do |featured|
                    projectId = "/projects/#{featured}"
                    project = projects.find { |p| p.id == projectId }
                    experience(project)
                end
            end
        end

        def professional_context(site)
            section('Professional Context') do
                languages(site)
                certifications(site)
                education(site)
            end
        end

        def languages(site)
            h3('Languages')
            site.data['profile']['languages'].each do |language|
                formatted_text([
                    {
                        text: "#{language['name']}: ", 
                        font: "IBM Plex Sans", 
                        size: config[:font_size], 
                        color: config[:text_color], 
                        styles: [:medium]                             
                    },
                    {
                        text: language['proficiency'], 
                        font: "IBM Plex Sans", 
                        size: config[:font_size], 
                        color: config[:text_color], 
                        styles: [:normal]                             
                    }
                ])
            end
            move_down config[:spacing]
        end

        def certifications(site)
            h3('Certifications')
            site.collections['certs'].docs.each do |cert|
                issuer_and_date = cert['achievement_date'] ? "#{cert['issuer']} (#{cert['achievement_date']})" : cert['issuer']
                formatted_text([
                    {
                        text: "#{cert['title']}: ", 
                        font: "IBM Plex Sans", 
                        size: config[:font_size], 
                        color: config[:text_color], 
                        styles: [:medium]                             
                    },
                    {
                        text: issuer_and_date, 
                        font: "IBM Plex Sans", 
                        size: config[:font_size], 
                        color: config[:text_color], 
                        styles: [:normal]                             
                    }
                ])
            end
            move_down config[:spacing]
        end

        def education(site)
            h3('Education')
            site.collections['education'].docs.each do |education|
                start_year = education['start_year']
                end_year = education['end_year']
                period = start_year == end_year ? "#{start_year}" : "#{start_year} - #{end_year}"
                description = education['description']
                title = education['title']
                formatted_text([
                    {
                        text: "#{title}: ", 
                        font: "IBM Plex Sans", 
                        size: config[:font_size], 
                        color: config[:text_color], 
                        styles: [:medium]
                    },
                    {
                        text: "#{description} (#{period})", 
                        font: "IBM Plex Sans", 
                        size: config[:font_size], 
                        color: config[:text_color], 
                        styles: [:normal]
                    }
                ])
            end
            move_down config[:spacing]            
        end

        def professional_experience(site)
            employers = site.collections['employment'].docs.reverse()
            section('Professional Experience') do
                after_start_year(1997, employers).each do |xp|
                    experience(xp)
                end
            end
            section('Early Career') do
                before_start_year(1997, employers).each do |xp|
                    experience(xp)
                end
            end
        end

        def experience(xp) = if xp
            h3(xp['title'])

            #----------------------
            # Typef of organization
            #----------------------
            type = xp['type']
            if type
                text("<i>#{type}</i>", inline_format: true)
            end

            #----------------------
            # Roles and period
            #----------------------
            roles = xp['roles'].is_a?(Array) ? xp['roles'].join(', ') : xp['roles']
            start_date = xp['start_date'].strftime('%Y-%m')
            end_date = xp['end_date'].is_a?(Date) ? xp['end_date'].strftime('%Y-%m') : xp['end_date']
            formatted_text([
                { 
                    text: roles, 
                    font: "IBM Plex Sans", 
                    size: config[:font_size], 
                    color: config[:text_color], 
                    styles: [:medium]
                },
                { 
                    text: " #{start_date} – #{end_date}", 
                    font: "IBM Plex Sans", 
                    size: config[:font_size], 
                    color: config[:text_color], 
                    styles: [:normal] }
            ])
            
            #----------------------
            # Summary
            #----------------------
            summary = xp['summary']
            if summary
                move_down space(2)
                formatted_text(summary.map { |s| { 
                    text: "#{s}.".gsub('..', '.'), 
                    font: "IBM Plex Sans", 
                    size: config[:font_size], 
                    color: config[:text_color], 
                    styles: [:normal] }})
            end

            #----------------------
            # Competencies
            #----------------------
            competencies = xp['competencies']
            if competencies
                move_down space(2)
                h4('Tech & Methods Used')
                competencies.each do |competency|
                    formatted_text([
                        {
                            text: "#{competency['name']}: ",
                            font: "IBM Plex Sans", 
                            size: config[:font_size], 
                            color: config[:text_color], 
                            styles: [:medium]
                        },
                        {
                            text: competency['tech'].join(', '),
                            font: "IBM Plex Sans", 
                            size: config[:font_size], 
                            color: config[:text_color], 
                            styles: [:normal]
                        }
                    ])
                end
            end

            move_down config[:spacing]
        end
        
        private

        def after_start_year(year, collection) = collection.select do |xp|
            date = xp['start_date']
            next false unless date
            date.year > year
        end

        def before_start_year(year, collection) = collection.select do |xp|
            date = xp['start_date']
            next false unless date
            date.year <= year
        end
    end
end