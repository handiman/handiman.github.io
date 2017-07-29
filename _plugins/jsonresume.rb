module Jekyll
	require 'json'
	
	class JSONResumeGenerator < Generator
		def generate(site)
			projects = []
			for projectorder in site.data["projectorder"]
				project = site.data["projects"][projectorder["name"]]
				projects << { 
					"name" => project["title"],
					"position" => project["position"],
					"website" => project["url"],
					"startDate" => project["start_date"],
					"endDate" => project["end_date"],
					"summary" => project["description"],
					"higlights" => project["achievements"]
				}
			end

			for profile in site.data["profile"]
				skills = []
				profile["skills"].each do |key, values|
				  skills << { 
						"name" => key.to_s.capitalize ,
						"keywords" => values
					}
				end
				languages = []
				interests = []

				json = JSON.generate({
					"basics" => {
						"name" => profile["name"],
						"title" => profile["title"],
						"website" => profile["url"],
						"location" => {
							"region" => profile["work_location"]
						}
					},
					"skills" => skills,
					"work" => projects
				})

				#p profile
				#p json

				path = File.join(site.source, "resume.json")
				File.write(path, json)
				site.static_files << Jekyll::StaticFile.new(site, site.source, nil, "resume.json")
			end
		end
	end # JSONResumeGenerator

end # Jekyll
