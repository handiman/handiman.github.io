module Jekyll
	require 'prawn'
	
	class PDFResumeGenerator < Generator
		def generate(site)
			puts "      Generating resume.pdf..."
			
			h1 = 22
			h2 = 18
			h3 = 14
			h4 = 10
			profile = site.data["profile"]
			font_name = "Helvetica"
			
			Prawn::Font::AFM.hide_m17n_warning = true
			Prawn::Document.generate("resume.pdf", :margin => 50) do
				default_leading 3
				font font_name, :size => 10
				separator = 15
			
				# <Cover>
					bounding_box([0, 150], :width => 250, :height => 100) do
						#stroke_bounds
						text "Henrik Becker", :size => h1
						stroke_horizontal_rule
						move_down default_leading * 3
						text "Software Engineer", :size => h2
						move_down default_leading * 3
						text "073-422 83 43"
						text "www.henrikbecker.net"
					end
					start_new_page
				# </Cover>
				
				# <Summary>
					page_top = cursor
					column_width = bounds.width / 3
					bounding_box([0, page_top], :width => column_width * 2 - separator) do
						text "Henrik Becker Is", :size => h1
						profile["summary"].each do | item | 
							text item
						end
						
						move_down separator
						text "Certifications", :size => h2
						profile["certifications"].each do | cert |
							text cert["name"]
						end
						
						move_down separator
						text "Languages", :size => h2
						profile["languages"].each do | language |
							text language["name"] + " - " + language["proficiency"]
						end
						
						move_down separator
						text "Education", :size => h2
						profile["education"].each do | education |
							text education["school"]
						end
					end
				# </Summary>
	
				# <Skills>
					bounding_box([column_width * 2, page_top], :width => column_width) do
						text "Skill Summary", :size => h1
						profile["skills"].each do | key, values |
							font font_name, :style => :bold do
								text key.capitalize, :size => h4
							end
							values.each do | value |
								text value
							end
							move_down separator
						end
					end
				# </Skills>
				start_new_page
				
				# <Projects>
					text "Project History", :size => h1
					stroke_horizontal_rule
					site.collections["projects"].docs.reverse_each do | project |
						span(500) do
							move_down separator
							text project["title"].to_s, :size => h2
							text project["start_date"].to_s + " - " + project["end_date"].to_s + ", " + project["location"].to_s
							description = project.to_s
							if !(description.nil? || description.empty?)
								move_down separator
								text description
							end
							move_down separator
							if project["achievements"] 
								font font_name, :style => :bold do
									text "Achievements:"
								end
								project["achievements"].each do | achievement |
									text "- " + achievement
								end
							end
						end
					end
				# </Projects>
				
				# <Employment>
					start_new_page
					text "Employment History", :size => h1
					stroke_horizontal_rule
					move_down separator
					site.collections["employment"].docs.reverse_each do | employment |
						start_date = employment["start_date"].strftime("%Y-%m")
						end_date = employment["end_date"]
						if end_date != "present" 
							end_date = end_date.strftime("%Y-%m")
						end

						span(500) do
							text start_date + " - " + end_date + " " + employment["title"] + " at " + employment["organization"]["name"]
						end
					end
				# </Employment>
			end
			
			site.static_files << Jekyll::StaticFile.new(site, site.source, '/', "resume.pdf")
		end
	end # PDFResumeGenerator

end # Jekyll
