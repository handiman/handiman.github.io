module Jekyll
    require 'prawn'
    require 'prawn/table'
  
    class PDFResume < Prawn::Document
      def initialize(site)
        super()
        page_size = "A4"
        margin = 30
        font_families.update("OpenSans" => {
          :normal => "#{site.source}/assets/fonts/OpenSans-Regular.ttf",
          :italic => "#{site.source}/assets/fonts/OpenSans-Italic.ttf",
          :bold => "#{site.source}/assets/fonts/OpenSans-Bold.ttf",
          :bold_italic => "#{site.source}/assets/fonts/OpenSans-BoldItalic.ttf"
        })
        font "OpenSans"

        @site = site
        @dir = 'assets'
        @filename = 'henrik-becker.pdf'
        
        # font size is in points (1/72 inch)
        @heading  = 55
        @subtitle = 22
        @h1       = 33
        @h2       = 22
        @h5       = 10
        @h6       = 10
        @normal   = 11
        @spacing  = margin
  
        @text_color = '010101'
        @link_color = '75A434'

        puts "      Generating... #{@dir}/#{@filename}"
      end
  
      def generate
        cover
        intro
        projects
        employment
        save
      end
      
      private 
  
      def cover
        person = @site.data['person']
        name  = person['name']
        title = person['jobTitle']
        phone = person['phone']
        url   = person['url']
        
        text name, :size => @heading#, :align => :center
        text title, :size => @subtitle#, :align => :center
        move_down @spacing
        stroke_horizontal_rule
        move_down @spacing
        link url
      end
      
      def intro
        profile
        skills
        languages
      end
  
      def projects
        start_new_page
        h1 'Featured Projects'
        @site.data["profile"]["featuredProjects"].each do |feature|
          @site.collections["projects"].docs.each do |project|
            if project.id == "/projects/" + feature
              move_down @spacing
              experience(Experience.new(project, @site))
            end
          end
        end
      end
  
      def employment
        h1 'Work Experience'
        @site.collections['employment'].docs.reverse.each do |work|
          move_down @spacing
          experience(Experience.new(work, @site))
        end
      end
  
      def save
        render_file("#{@dir}/#{@filename}")
        @site.static_files << Jekyll::StaticFile.new(@site, @site.source, @dir, @filename)
      end
  
      def profile
        h1 'Profile'
        p @site.data['person']['description']
      end
  
      def skills
        categories = @site.data['profile']['featuredSkills']
       
        data = [categories.keys]
        for i in 0..3 do
          row = []
          for category in categories
            row.push category[1][i]['name']
          end
          data.push row
        end
  
        h1 'Skills & Expertise'
        table data do
          cells.borders = []
          cells.size = @normal
          row(0).font_style = :bold
        end
      end
  
      def languages
        data = @site.data['profile']['languages'].map { |lang| [lang['name'].strip(), lang['proficiency'].strip()] }
  
        h1 'Languages'
        table data  do
          cells.borders = []
          cells.size = @normal
          columns(0).font_style = :bold
        end
      end
  
      def experience(xp)
        period = "#{xp.from.strftime('%b %Y')}"
        unless xp.to.nil?
          period = "#{period} - #{xp.to.is_a?(Date) ? xp.to.strftime('%b %Y') : xp.to}"
        end
  
        h2 xp.name
        h5 "#{xp.role} | #{period}"
        move_down @normal
  
        unless xp.summary.nil?
          if xp.id == '/employment/17-self-employed'
            p xp.mission
            h6 "Clients:"
          end
          xp.summary.each do |line| 
            li line
          end
        end
  
        unless xp.skills.nil?
          move_down @normal
          h6 "Skills used"
          p xp.skills.join(', ')
        end
      end
  
      def li(content)
        move_down @normal / 2
        text "\u2022 #{content}"
      end
  
      def link(url)
        text url, :color => @link_color, :size => @normal
      end
  
      def h1(content)
        move_down @spacing
        text content, :size => @h1
      end
  
      def h2(content)
        move_down @normal
        text content, :size => @h2
      end
  
      def h5(content)
        move_down @normal / 2
        text content, :size => @h5, :style => :bold
      end
  
      def h6(content)
        move_down @normal / 2
        text content, :size => @h6, :style => :bold
      end
  
      def p(content)
        text content, :size => @normal
      end
    end
  end