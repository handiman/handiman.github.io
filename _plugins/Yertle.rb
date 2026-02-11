module Yertle
    # Namespaces
    CV     = RDF::Vocabulary.new("https://henrikbecker.se/cv#")
    SCHEMA = RDF::Vocab::SCHEMA

    def self.dump(cv)

        graph = RDF::Graph.new

        # Subject node for you
        henrik = CV.HenrikBecker
        
        # Add triples
        graph << [henrik, RDF.type, SCHEMA.Person]
        graph << [henrik, SCHEMA.name, cv["introduction"]["name"]]
        graph << [henrik, SCHEMA.jobTitle, cv["introduction"]["jobTitle"]]
        graph << [henrik, SCHEMA.email, cv["introduction"]["email"]]
        cv["introduction"]["sameAs"].each do |url|
            graph << [henrik, SCHEMA.sameAs, RDF::URI(url)]
        end

        graph.dump(:ttl, prefixes: {
            cv: CV.to_uri.to_s,
            schema: SCHEMA.to_uri.to_s
        })
    end    
end