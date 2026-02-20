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

module Jekyll
    Hooks.register :site, :post_write do |site|
        next unless Jekyll.env == "production"
        cv = site.data['cv']
        path = "#{site.dest}/assets/henrik-becker"

        puts "      Generating CV as JSON..."
        File.write("#{path}.json", JSON.dump(cv))

        puts "      Generating CV as BSON..."
        File.binwrite("#{path}.bson", BSON::Document.new(cv).to_bson())

        puts "      Generating CV as YAML..."
        File.write("#{path}.yml", YAML.dump(cv))

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

        puts "      Generating CV as PDF..."
        system("typst compile --font-path assets/fonts #{path}.typ #{path}.pdf --font-path fonts")

        puts "      Generating Agreemets as PDF..."
        Dir.foreach("#{site.source}/_agreements") do |filename|
            next if not filename.end_with?('.yml')
            template = "#{site.source}/_agreements/_agreement-sv.typ"
            target = "#{site.dest}/agreements/#{filename.gsub('.yml', '.pdf')}"
            font_path = "#{site.dest}/assets/fonts"
            args = "--font-path assets/fonts --input yaml=#{filename}"
            system("typst compile #{template} #{target} #{args}")
        end
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
