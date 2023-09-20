module Jekyll 
    require 'rest-client'
    require 'json'

    class Person < Jekyll::Generator
        #
        # Updates _data/person.json with some stuff from elsewhere
        #
        def generate(site)
            handiman = JSON.parse(RestClient.get('https://api.github.com/users/handiman'))

            person_path = "#{site.source}/_data/person.json"
            person = JSON.parse(File.read(person_path))
            person["description"] = handiman["bio"]
            person["image"] = handiman["avatar_url"]
            File.write(person_path, person.to_json)
        end
    end
end    