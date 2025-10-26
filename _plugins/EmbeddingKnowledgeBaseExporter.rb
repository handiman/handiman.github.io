module Jekyll

  class EmbeddingKnowledgeBaseExporter < Jekyll::Generator    
    def generate(site)        
      @site = site
      #if not (Gem.win_platform?)
      begin
        @file = File.open("assets/henrik-becker.md", "w")
        @file.puts "# Henrik Becker - Embedding Knowledge Base"
        projects()
        work()
        languages()
      rescue IOError => e
        #some error occur, dir not writable etc.
      ensure
        @file.close unless @file.nil?
      end 
    end

    def projects
        @file.puts "\n## Featured Projects"
        @site.data["profile"]["featuredProjects"].each do |feature|
        @site.collections["projects"].docs.each do |project|
          if project.id == "/projects/" + feature
            @file.puts "### #{project['name']}"
            labelled_thing "Description", project
            labelled_list "Roles", project["roles"]
            labelled_list "Skills", project["skills"]
            @file.puts "\n"
          end
        end
      end  
    end

    def work 
      @file.puts "\n## Work Experience"
      @site.collections['employment'].docs.reverse.each do |work|
        org = work['organization']
        @file.puts "### #{org['name']} (#{work['start_date']} – #{work['end_date']})"
        labelled_thing 'Description', work
        labelled_list 'Roles', work['roles']
        labelled_list 'Skills', work['skills']
        @file.puts "\n"
      end
    end

    def languages
      languages = @site.data['profile']['languages']
      @file.puts "\n## Languages"
      languages.each do | language |
        @file.puts "- #{language['name']} (#{language['proficiency']})"
      end
    end

    def labelled_thing(label, thing)
      description = thing["description"]
      unless description
        if thing["summary"]
          description = thing["summary"].join(". ")
        end
      end

      if description
        @file.puts "#{label}:   \n"
        @file.puts "#{description.strip.gsub(/\s+/, ' ').gsub("..", ".")}" 
      end
    end

    def labelled_list(label, list)
      return unless list
        data = if list.is_a?(Array)
            list
        else
            list.split(",")
        end
        @file.puts "#{label}:   \n"
        data.each do | item |
          @file.puts "- #{item.strip.gsub(/\s+/, ' ')}"
        end
    end
  end
end   