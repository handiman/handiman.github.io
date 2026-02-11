class CVGenerator < Jekyll::Generator
    include Person
    include CanonicalCV
    include SemanticCV

    def generate(site)
        person(site)
        canonical_cv(site)
        semantic_cv(site)
    end
end
