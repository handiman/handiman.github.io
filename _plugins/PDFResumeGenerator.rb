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
			Prawn::Document.generate("assets/resume.pdf", :margin => 70) do
				default_leading 3
				font font_name, :size => 10
				separator = 15
			
				# <Cover>
					bounding_box([0, 150], :width => 250, :height => 100) do
						text profile["name"], :size => h1
						stroke_horizontal_rule
						move_down default_leading * 3
						text profile["title"], :size => h2
						move_down default_leading * 3
						text profile["contact_info"]["phone"]
						text "www.henrikbecker.net"
					end
				# </Cover>

				start_new_page

				# <Summary>
					text "Summary", :size => h1
					profile["summary"].each do | item | 
						text item
					end
				# </Summary>
	
				column_width = bounds.width / 2
				# <Skills>
					move_down separator
					page_top = cursor
				
					bounding_box([0, page_top], :width => column_width - separator) do
						text "Frameworks", :size => h2
						profile["skills"]["frameworks"].each do | framework |
							text framework
						end
					end

					bounding_box([column_width + separator, page_top], :width => column_width - separator) do
						text "Languages (programming)", :size => h2
						profile["skills"]["languages"].each do | language |
							text language
						end
					end
					
					move_down separator
					move_down separator
					page_top = cursor

					bounding_box([0, page_top], :width => column_width - separator) do
						text "Methods", :size => h2
						profile["skills"]["methods"].each do | method |
							text method
						end
					end

					bounding_box([column_width + separator, page_top], :width => column_width - separator) do
						text "Tools", :size => h2
						profile["skills"]["tools"].each do | tool |
							text tool
						end
					end
					
					move_down separator
					move_down separator
					page_top = cursor

					bounding_box([0, page_top], :width => column_width - separator) do
						text "Certifications", :size => h2
						profile["certifications"].each do | cert |
							text cert["name"]
						end

						move_down separator

						text "Languages", :size => h2
						profile["languages"].each do | language |
							text language["name"] + " - " + language["proficiency"]
						end
					end

					bounding_box([column_width + separator, page_top], :width => column_width - separator) do
						text "Databases", :size => h2
						profile["skills"]["databases"].each do | database |
							text database
						end
					end
				# </Skills>

				start_new_page
				
				# <Projects>
					text "Project History", :size => h1
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
							if project["achievements"] 
								move_down separator
								font font_name, :style => :bold do
									text "Achievements:"
								end
								project["achievements"].each do | achievement |
									text "- " + achievement
								end
							end
							if project["skills"]
								move_down separator
								font font_name, :style => :bold do
									text "Technologies used:"
								end
								project["skills"].each do | skill |
									text "- " + skill
								end
							end
					end
					end
				# </Projects>
				
				# <Employment>
					start_new_page
					text "Employment History", :size => h1
					move_down separator
					site.collections["employment"].docs.reverse_each do | employment |
						start_date = employment["start_date"].strftime("%Y-%m")
						end_date = employment["end_date"]
						if end_date != "present" 
							end_date = end_date.strftime("%Y-%m")
						end

						page_top = cursor
						bounding_box([0, page_top], :width => 90) do
							text start_date + " - " + end_date
						end
						bounding_box([100, page_top], :width => bounds.width - 100) do
							text employment["title"] + " at " + employment["organization"]["name"]
						end
					end
				# </Employment>

				# <Education>
					move_down separator
					move_down separator
					text "Education", :size => h2
					profile["education"].each do | education |
						page_top = cursor
						bounding_box([0, page_top], :width => 90) do
							text education["start_year"].to_s + " - " + education["end_year"].to_s
						end
						bounding_box([100, page_top], :width => bounds.width - 100) do
							text education["school"]
						end
					end
				# </Education>
			end
			
			site.static_files << Jekyll::StaticFile.new(site, site.source, '/assets/', "resume.pdf")
		end
	end # PDFResumeGenerator

end # Jekyll
