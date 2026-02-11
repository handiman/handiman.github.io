# --------------------------------------------------------------------
# Creates a JSON version of the CV for use by Typst first and foremost
# --------------------------------------------------------------------
module Typst
    Jekyll::Hooks.register :site, :post_write do |site|
        person = site.data['person']
        profile = site.data['profile']
        File.write("#{site.dest}/assets/cv.typ.json", JSON.dump({
            "masthead" => {
                "name"      => person['name'],
                "jobTitle"  => person['jobTitle'],
                "image"     => person['image'],
                "telephone" => person['telephone'],
                "email"     => 'contact@henrikbecker.se',
                "sameAs"    => [person['url']].concat(person['sameAs'])
            }
            #,
            #"description"           => person['description']
            #,
            #"coreSkills"            => site.data['profile']['coreSkills'],
            #"languages"             => site.data['profile']['languages'],
            #"certifications"        => certifications(site),
            #"education"             => education(site),
            #"featuredProjects"      => featured_projects(site),
            #"professionalExperience"=> professional_experience(site),
            #"earlyCareer"           => early_career(site)
        }))
    end

    module_function

    def certifications(site) = site.collections['certs'].docs.map { | cert | {
        "title"             => cert['title'],
        "issuer"            => cert['issuer'],
        "achievementDate"   => cert['achievement_date']
    }}

    def education(site) = site.collections['education'].docs.map { | education | 
        start_year = education['start_year']
        end_year = education['end_year']
        description = education['description']
        title = education['title']
        {
            "title"         => title,
            "period"        => start_year == end_year ? "#{start_year}" : "#{start_year} - #{end_year}",
            "description"   => description
        }
    }

    def featured_projects(site) 
        profile = site.data['profile']
        projects = site.collections['projects'].docs
        profile['featuredProjects']
            .map { |feature| 
                projects.find { |project| project.id == "/projects/#{feature}" }
            }
            .map { |project| 
                experience(project) 
            } 
    end

    def professional_experience(site) = after_start_year(1997, site.collections['employment'].docs).map { | xp | experience(xp) }
    def early_career(site) = before_start_year(1997, site.collections['employment'].docs).map { | xp | experience(xp) }

    def experience(xp) = {
        "title"         => xp['title'],
        "type"          => xp['type'],
        "roles"         => xp['roles'].is_a?(Array) ? xp['roles'].join(', ') : xp['roles'],
        "startDate"     => xp['start_date'].strftime('%Y-%m'),
        "endDate"       => xp['end_date'].is_a?(Date) ? xp['end_date'].strftime('%Y-%m') : xp['end_date'],
        "summary"       => xp['summary'] == nil ? nil : (xp['summary'].is_a?(Array) ? xp['summary'].join('. ') : xp['summary']).gsub('..', '.'),
        "competencies"  => xp['competencies']
    }

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
