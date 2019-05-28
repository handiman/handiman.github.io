module Jekyll
	require 'caracal'
	
	class DOCXResumeGenerator < Generator
		def getnetworks(profile)
			networks = []
			profile["same_as"].each do |network|
				networks << { 
					"network" => network["network"],
					"url" => network["url"]
				}
			end
			return networks
		end

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
			profile["languages"].each do |language|
				languages << { 
					"name" => language["name"],
					"keywords" => language["proficiency"]
				}
			end
			return languages
		end

		def getinterests(profile)
			interests = []
			profile["interests"].each do |interest|
				interests << { 
					"name" => interest
				}
			end
			return interests
		end

		def getprojects(site)
			projects = []
			site.collections["projects"].docs.reverse_each do |project|
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
			puts "      Generating resume.docx..."
			profile = site.data["profile"]
			Caracal::Document.save 'resume.docx' do | docx |
				# Cover page
				docx.h1 "Henrik Becker"
				
				# Summary page
				docx.page
				docx.h1 "Hello, World!"
			end
			#json = JSON.pretty_generate({
			#	"basics" => {
			#		"name" => profile["name"],
			#		"label" => profile["title"],
			#		"website" => profile["url"],
			#		"summary" =>  profile["summary"].join("\n"),
			#		"location" => {
			#			"region" => profile["work_location"],
			#			"countryCode" => profile["country_code"]
			#		},
			#		"profiles" => getnetworks(profile)
			#	},
			#	"skills" => getskills(profile),
			#	"languages" => getlanguages(profile),
			#	"interests" => getinterests(profile),
			#	"education" => geteducation(profile),
			#	"work" => getprojects(site)
			# })
			

			#File.write(File.join(site.source, "resume.json"), json)
			
			site.static_files << Jekyll::StaticFile.new(site, site.source, '/', "resume.docx")
		end
	end # DOCXResumeGenerator

end # Jekyll
