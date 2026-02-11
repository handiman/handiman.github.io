module Yertle
    CV     = RDF::Vocabulary.new("https://henrikbecker.se/cv#")
    SCHEMA = RDF::Vocab::SCHEMA

    def self.dump(cv)
        henrik = CV.HenrikBecker
        graph = RDF::Graph.new().extend(Turtle)
        graph.intro(henrik, cv)
        graph.languages(henrik, cv)
        graph.knowsAbout(henrik, cv)
        graph.skills(henrik, cv) 
        graph.education(henrik, cv)
        graph.dump(:ttl, prefixes: {
            cv: CV.to_uri.to_s,
            schema: SCHEMA.to_uri.to_s
        })
    end    

    module Turtle
        def intro(henrik, cv)
            intro = cv["introduction"]
            self << [henrik, RDF.type, SCHEMA.Person]
            self << [henrik, SCHEMA.name, intro["name"]]
            self << [henrik, SCHEMA.gender, "Male"]
            self << [henrik, SCHEMA.nationality, "Swedish"]
            self << [henrik, SCHEMA.jobTitle, intro["jobTitle"]]
            self << [henrik, SCHEMA.telephone, intro["telephone"]]
            self << [henrik, SCHEMA.email, intro["email"]]
            self << [henrik, SCHEMA.image, intro["image"]]
            self << [henrik, SCHEMA.url, "https://www.henrikbecker.net"]
            self << [henrik, SCHEMA.description, intro["description"]]
            intro["sameAs"].each do |url|
                self << [henrik, SCHEMA.sameAs, RDF::URI(url)]
            end
        end

        def languages(henrik, cv)= cv['languages'].each do |language|
            self << [henrik, SCHEMA.knowsLanguage, language["name"]]
        end

        def knowsAbout(henrik, cv)= cv['coreSkills'].each do |category|
            self << [henrik, SCHEMA.knowsAbout, category["name"]]
        end

        def skills(henrik, cv)= cv['allSkills'].each do |skill|
            self << [henrik, SCHEMA.skills, skill]
        end

        def education(henrik, cv)= cv['education'].each do |edu|
            self << [henrik, SCHEMA.alumniOf, edu["title"]]
        end
    end
end