module Jekyll 
    require 'rest-client'
    require 'json'

    class Person < Jekyll::Generator
        #
        # Updates _data/person.json with some stuff from elsewhere
        #
        def generate(site)
            if not (Gem.win_platform?)
                handiman = JSON.parse(RestClient.get('https://api.github.com/users/handiman'))
                readme = RestClient.get('https://raw.githubusercontent.com/handiman/handiman/master/README.md').lines.first
                person_path = "#{site.source}/_data/person.json"
                person = JSON.parse(File.read(person_path))
                person["description"] = readme
                person["image"] = handiman["avatar_url"]
                File.write(person_path, person.to_json({
                  array_nl: "\n",
                  object_nl: "\n",
                  indent: '  ',
                  space: ' '
                }))
            end                
        end
    end
end