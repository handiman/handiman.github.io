require "date"
require "json"
require "bson"
require "gyoku"
require "toml-rb"
require "inifile"
require "msgpack"
require "cbor"
require "rdf"
require "rdf/turtle"
require "rdf/vocab"
require "asciidoctor"
require "prawn"

module Jekyll
    Hooks.register :site, :post_write do |site|
        cv = site.data['cv']
        path = "#{site.dest}/assets/henrik-becker"

        Prawn::Document.generate("#{path}.pdf", margin: 40) do |pdf|
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

        puts "      Generating CV as JSON..."
        File.write("#{path}.json", JSON.dump(cv))

        puts "      Generating CV as BSON..."
        File.binwrite("#{path}.bson", BSON::Document.new(cv).to_bson())

        puts "      Generating CV as YAML..."
        File.write("#{path}yaml", YAML.dump(cv))

        puts "      Generating CV as TOML..."
        File.write("#{path}.toml", TomlRB.dump(cv))

        puts "      Generating CV as AsciiDoc..."
        File.write("#{path}.adoc", AsciiDoc.dump(cv))

        puts "      Generating CV as CBOR..."
        File.binwrite("#{path}.cbor", CBOR.encode(normalize(cv)))

        puts "      Generating CV as MessagePack..."
        File.binwrite("#{path}.msgpack", normalize(cv).to_msgpack())

        puts "      Generating CV as RDF/Turtle..."
        File.write("#{path}.ttl", Yertle.dump(cv))
    end
    
    private
    module_function

    def normalize(obj)
        case obj
        when Date
            obj.iso8601
        when Hash
            obj.transform_values { |v| normalize(v) }
        when Array
            obj.map { |v| normalize(v) }
        else
            obj
        end
    end
end
