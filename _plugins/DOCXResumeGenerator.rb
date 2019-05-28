module Jekyll
	require 'caracal'
	
	class DOCXResumeGenerator < Generator
		def generate(site)
			#puts "      Generating resume.docx..."
			#profile = site.data["profile"]
			#Caracal::Document.save 'resume.docx' do | docx |
			#	# Cover page
			#	docx.h1 "Hello, World!"
			#	docx.p do
			#		anchor do
			#			text 'Jag skriver text'
			#			br
			#			text 'Jag skriver å, ä och ö'
			#		end	
			#	end
			#
			#	
			#	# Summary page
			#	docx.page
			#	docx.h1 "Page 2"
			#end
			#site.static_files << Jekyll::StaticFile.new(site, site.source, '/', "resume.docx")
		end
	end # DOCXResumeGenerator

end # Jekyll
