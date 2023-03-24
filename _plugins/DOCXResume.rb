module Jekyll
  require 'caracal'

  class DOCXResume < Caracal::Document
    def initialize(site)
      @site = site
      @dir = 'assets'
      @filename = 'henrik-becker.docx'

      fullPath = "#{@dir}/#{@filename}"
      super(fullPath)
      puts "      Generating... #{fullPath}"

      baseSize = 20 # font size is defined in half points
      lineHeight = baseSize * 10
      spacing = lineHeight
      textColor = '010101'
      primaryColor = '75A434'
      
      page_margins do #units in twips.
        left    960 
        right   960 
        top     960
        bottom  960
      end

      list_style do
        type    :unordered
        format  'bullet'
        value   '✓'
        level   0
      end
      style do
        id 'Heading'
        name 'heading'
        color textColor
        font 'Open Sans Light'
        size baseSize * 5
        line lineHeight
      end
      style do 
        id 'Subtitle'
        name 'subtitle'
        color textColor
        font 'Open Sans Light'
        size baseSize * 2
        line lineHeight
      end
      style do
        id 'Heading1'
        name 'heading 1'
        color textColor
        font 'Open Sans Light'
        size baseSize * 3
        line lineHeight + 2
        top spacing * 2
        #bottom spacing
      end
      style do
        id 'Heading2'
        name 'heading 2'
        color textColor
        font 'Open Sans Light'
        size baseSize * 2
        line lineHeight
        top spacing * 2
        bottom 0
      end
      style do
        id 'Heading5'
        name 'heading 5'
        color textColor
        font 'Open Sans Light'
        bold true
        italic false
        size baseSize - 2
        line lineHeight
        #top 0
        #bottom spacing
      end
      style do
        id 'Heading6'
        name 'heading 6'
        color textColor
        font 'Open Sans Light'
        bold true
        italic false
        size baseSize - 2
        line lineHeight
        #top lineHeight
        bottom 0
      end
      style do 
        id 'Normal'
        name 'normal'
        color textColor
        font 'Open Sans'
        size baseSize
        line lineHeight
        bottom spacing
      end
      style do
        id 'TableHeader'
        name 'table header'
        color textColor
        font 'Open Sans Light'
        bold true
        size baseSize - 4
        line lineHeight
        top 0
        bottom 0
      end
      style do
        id 'TableCell'
        name 'table cell'
        size baseSize
        line lineHeight
        top 0
        bottom 0
      end
      style do
        id 'FontAwesomeSolid'
        name 'font awesome solid'
        size baseSize
        line lineHeight
        top 0
        bottom 0
        font 'Font Awesome 5 Free Solid'
      end
      style do
        id 'FontAwesomeRegular'
        name 'font awesome regular'
        size baseSize
        line lineHeight
        top 0
        bottom 0
        font 'Font Awesome 5 Free Regular'
      end
    end

    def generate
      intro
      projects
      employment
      save
    end
    
    private

    
    def intro
      person      = @site.data['person']
      name        = person['name']
      title       = person['jobTitle']
      phone       = person['telephone']
      url         = person['url']
      description = person['description']
      link_text   = url #url.sub!('https://', '')
      
      p name, style: 'Heading' 
      p title, style: 'Subtitle'
      hr

      p do 
        text description
      end

      skills
      languages_and_contact
    end

    def languages_and_contact
      margins     = { top: 0, bottom: 0, left: 0, right: 0 }
      table [
          ['Languages', 'Contact'], 
          [languages, contact]
        ], border_size: 0, margins: margins do
        cell_style cells, style: 'TableCell', margins: margins
        cell_style rows[0], style: 'Heading1'
      end
    end

    def languages
      data = @site.data['profile']['languages']
      Caracal::Core::Models::TableCellModel.new do
        p do
          style 'TableCell'
          br
          data.each do | language |
            text "#{language['name']} - #{language['proficiency']}"
            br
          end
        end
      end
    end

    def contact
      person      = @site.data['person']
      phone       = person['telephone']
      url         = "#{person['url']}/#/contact"
      link_text   = "#{person['url']}".sub!('https://', '')

      Caracal::Core::Models::TableCellModel.new do
        p do
          style 'TableCell'
          br
          text phone
          br
          link link_text, url, color: '75A434'
        end
      end
    end

    def projects
      page
      h1 'Featured Projects'
      @site.data["profile"]["featuredProjects"].each do |feature|
        @site.collections["projects"].docs.each do |project|
          if project.id == "/projects/" + feature
            experience(Experience.new(project, @site))
          end
        end
      end
    end

    def employment
      page
      h1 'Work Experience'
      @site.collections['employment'].docs.reverse.each do |work|
        experience(Experience.new(work, @site))
      end
    end

    def save
      super
      @site.static_files << Jekyll::StaticFile.new(@site, @site.source, @dir, @filename)
    end

    def skills
      categories = @site.data['profile']['featuredSkills']
      source = @site.source
      doc = self
     
      data = [categories.keys.map { |key| Caracal::Core::Models::TableCellModel.new do
        p key
      end}]
      for i in 0..3 do
        row = []
        for category in categories
          row.push(Caracal::Core::Models::TableCellModel.new do
            p category[1][i]['name']
            icon = "#{source}/assets/img/#{category[1][i]['level'].downcase}.png"
            img icon do
              data IO.binread(icon)
              width 43
              height 10
            end
          end)
        end
        data.push row
      end
      
      h1 'Skills & Expertise'
      table data, border_size: 0, margins: { top: 0, bottom: 0, left: 0, right: 0 } do
        cell_style cells, style: 'TableCell', margins: { top: 0, bottom: 0, left: 0, right: 10 }
        cell_style rows[0], style: 'TableHeader'
      end
    end

    def experience(xp)
      h2 xp.name
      
      h5 do 
        text "#{xp.role} | #{xp.from.strftime('%b %Y')}"
        unless xp.to.nil?
          text " - #{xp.to.is_a?(Date) ? xp.to.strftime('%b %Y') : xp.to}"
        end
      end

      unless xp.summary.nil?
        if xp.id == '/employment/17-self-employed'
          p xp.mission
          h6 "Clients:"
        end
        ul do
          xp.summary.each do |line| 
            li line.to_s
          end
        end
      end

      unless xp.skills.nil?
        h6 "Skills used"
        p xp.skills.join(', ')
      end
    end
  end
end