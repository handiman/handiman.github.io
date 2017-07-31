module Jekyll
	require 'json'
	
	class JSONResumeGenerator < Generator
		def geteducation(profile)
			education = []
			profile["education"].each do |key|
				education << { 
					"institution" => key["school"],
					"area" => key["description"],
					"startDate" => key["start_year"].to_s + "-01-01",
					"endDate" => key["end_year"].to_s + "-01-01"
				}
			end
			return education
		end

		def getskills(profile)
			skills = []
			profile["skills"].each do |key, values|
				skills << { 
					"name" => key.to_s.capitalize,
					"keywords" => values
				}
			end
			return skills
		end

		def getlanguages(profile)
			languages = []
			profile["languages"].each do |key|
				languages << { 
					"name" => key["name"],
					"keywords" => key["proficiency"]
				}
			end
			return languages
		end

		def getinterests(profile)
			interests = []
			profile["interests"].each do |key|
				interests << { 
					"name" => key
				}
			end
			return interests
		end

		def getprojects(site)
			projects = []
			for projectorder in site.data["projectorder"]
				project = site.data["projects"][projectorder["name"]]
				projects << { 
					"name" => project["title"].to_s,
					"position" => project["position"].to_s,
					"website" => project["url"].to_s,
					"startDate" => project["start_date"].to_s,
					"endDate" => project["end_date"].to_s,
					"summary" => project["description"].to_s,
					"higlights" => project["achievements"]
				}
			end
			return projects
		end

		def generate(site)
			for profile in site.data["profile"]
				json = JSON.generate({
					"basics" => {
						"name" => profile["name"],
						"label" => profile["title"],
						"website" => profile["url"],
						"summary" =>  profile["summary"].join("\n"),
						"location" => {
							"region" => profile["work_location"]
						}
					},
					"skills" => getskills(profile),
					"languages" => getlanguages(profile),
					"interests" => getinterests(profile),
					"education" => geteducation(profile),
					"work" => getprojects(site)
				})

				File.write(File.join(site.source, "resume.json"), json)
				site.static_files << Jekyll::StaticFile.new(site, site.source, '/', "resume.json")
			end
		end
	end # JSONResumeGenerator

end # Jekyll
