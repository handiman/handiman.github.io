module Jekyll

  class SemanticModelGenerator < Jekyll:: Generator
    def generate(site)  
      @site = site      
      site.data["semantic-model"] = {
        "summary" => {
          "roles" => all_roles,
          "skills" => all_skills
        }
      }
    end

    def all_roles 
      all_roles = Set.new

      @site.collections["projects"].docs.each do |doc|
        roles = doc["roles"]
        if roles.is_a?(Array)
          roles.each { |r| all_roles.merge(r.split(",").map(&:strip)) }
        elsif roles.is_a?(String)
          all_roles.merge(roles.split(",").map(&:strip))
        end
      end

      @site.collections["employment"].docs.each do |doc|
        roles = doc["roles"]
        if roles.is_a?(Array)
          roles.each { |r| all_roles.merge(r.split(",").map(&:strip)) }
        elsif roles.is_a?(String)
          all_roles.merge(roles.split(",").map(&:strip))
        end
      end

      all_roles.uniq.sort.to_a
    end
    
    def all_skills 
      all_skills = Set.new

      @site.collections["projects"].docs.each do |doc|
        skills = doc["skills"]
        if skills.is_a?(Array)
          skills.each { |r| all_skills.merge(r.split(",").map(&:strip)) }
        elsif skills.is_a?(String)
          all_skills.merge(skills.split(",").map(&:strip))
        end
      end

      @site.collections["employment"].docs.each do |doc|
        skills = doc["skills"]
        if skills.is_a?(Array)
          skills.each { |r| all_skills.merge(r.split(",").map(&:strip)) }
        elsif skills.is_a?(String)
          all_skills.merge(skills.split(",").map(&:strip))
        end
      end

      all_skills.uniq.sort.to_a
    end
  end

  class EmbeddingKnowledgeBaseExporter < Jekyll::Generator    
    def generate(site)        
      #if not (Gem.win_platform?)
      #begin
        #@file.puts "# Henrik Becker - Embedding Knowledge Base"
        #summary()
        #featured_projects()
        #all_projects()
        #work_experience()
        #languages()
        #education()
        #recommendations()
        #social()
        #personal()
      #rescue IOError => e
      #  puts e
      #ensure
      #  @file.close unless @file.nil?
      #end 
    end

    def summary
      @file.puts "\n## Profile Summary"
      languages_summary()
      certifications_summary()
      education_summary()
      skills_summary()
      social_summary()
      roles_summary()
      @file.puts "\n"
    end

    def personal()
      @file.puts "\n## Interests"
      @site.data['profile']['interests'].each do | interest |
        @file.puts "- #{interest['name']}"
      end

      @file.puts "\n## Fun Facts"
      @site.collections['fun_facts'].docs.each do | fact |
        @file.puts "- #{fact['title']}"
      end
    end

    def roles_summary
      all_roles = Set.new

      @site.collections["projects"].docs.each do | doc |
        roles = doc["roles"]
        all_roles.merge(roles) if roles.is_a?(Array)
      end

      @site.collections["employment"].docs.each do | doc |
        roles = doc["roles"]
        all_roles.merge(roles) if roles.is_a?(Array)
      end

      labelled_list("\nRoles", all_roles.uniq.sort)
    end

    def skills_summary
      all_skills = Set.new
      
      @site.collections["projects"].docs.each do | doc |
        skills = doc["skills"]
        all_skills.merge(skills) if skills.is_a?(Array)
      end

      @site.collections["employment"].docs.each do | doc |
        skills = doc["skills"]
        all_skills.merge(skills) if skills.is_a?(Array)
      end

      @file.write "\nTechnologies: "
      @file.write all_skills.uniq.sort.join(", ")
    end

    def education_summary
      @file.write "\nEducation: "
      education = @site.data['profile']['education']
      education.each do | edu |
        @file.write "#{edu['school']}"
        @file.write ", " unless edu == education.last
      end
    end

    def languages_summary
      @file.write "\nLanguages: " 
      languages = @site.data['profile']['languages']
      languages.each do | language |
        @file.write "#{language['name']} (#{language['proficiency']})"
        @file.write ", " unless language == languages.last
      end
    end

    def certifications_summary
      @file.write "\nCertifications: "
      certs = @site.collections['certs']
      certs.docs.each do | cert |
        @file.write "#{cert['title']}"
        @file.write ", " unless cert == certs.docs.last
      end
    end

    def social
      @file.puts "\n## Social Links"
      @site.data['profile']['same_as'].each do | social |
        @file.puts "- [#{social['network']}](#{social['url']})"
      end
    end

    def social_summary
      @file.write "\nSocial: "
      networks = @site.data['profile']['same_as']
      networks.each do | social |
        @file.write "[#{social['network']}](#{social['url']})"
        @file.write ", " unless social == networks.last
      end
    end

    def recommendations
      @file.puts "\n## Recommendations"
      @site.data['profile']['recommendations'].each do | recommendation |
        @file.puts "> #{recommendation['text']}"
        @file.puts "- #{recommendation['name']}"
      end
    end

    def education
      @file.puts "\n## Education"
      @site.data['profile']['education'].each do | edu |
        @file.write "### #{edu['school']} ("
        if edu['end_year']
          @file.write edu['start_year']
          @file.write " - #{edu['end_year']}" unless edu['end_year'] == edu['start_year']
        else
        end
        @file.puts ")"
        @file.puts "Description: #{edu['description']}" if edu['description']
        @file.puts "Focus:  #{edu['focus']}" if edu['focus']
        @file.puts "Location: #{edu['location']}" if edu['location']
      end
    end

    def featured_projects
        @file.puts "\n## Featured Projects"
        @site.data["profile"]["featuredProjects"].each do |feature|
        @site.collections["projects"].docs.each do |project|
          if project.id == "/projects/" + feature
            project(project)
          end
        end
      end  
    end

    def all_projects
      @file.puts "\n## All Projects"
      @site.collections["projects"].docs.reverse.each do |project|
        project(project)
      end
    end

    def project(project)
      @file.puts "### #{project['name']} (#{project['start_date']} – #{project['end_date']})"
      thing  project
      labelled_list "Roles", project["roles"]
      labelled_list "Skills", project["skills"]
      @file.puts "\n"
    end

    def work_experience 
      @file.puts "\n## Work Experience"
      @site.collections['employment'].docs.reverse.each do |work|
        org = work['organization']
        @file.puts "### #{org['name']} (#{work['start_date']} – #{work['end_date']})"
        thing work
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

    def thing(thing)
      description = thing["description"]
      unless description
        if thing["summary"]
          description = thing["summary"].join(". ")
        end
      end
      if description
        @file.puts "#{description.strip.gsub(/\s+/, ' ').gsub("..", ".")}" 
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
        @file.puts "#{label}   \n"
        @file.puts "#{description.strip.gsub(/\s+/, ' ').gsub("..", ".")}" 
      end
    end

    def labelled_list(label, list)
      return unless list
        data = if list.is_a?(Array)
            list.join(", ")
        else
            list
        end
        @file.puts "#{label}: #{data}"
    end
  end
end   