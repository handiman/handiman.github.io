require 'safe_yaml/load'

module HB
	class Generator < Jekyll::Generator
		def generate(site)
		end
		
		def filter_static_files(site, filter)
			result = []
			site.static_files.each do |file|
				path = file.path.split('/')
				group = path[path.length - 2]
				if group == filter
					result.push(file)
				end
			end
			return result
		end
	end

	class EmployersGenerator < HB::Generator
		# Generates the _data/projects.yml file.
		# I wanted to use Jekyll collections but that seems
		# to be broken in the Jekyll version GitHub pages use.
		def generate(site)
			#file = File.new(site.config['source'] + '/_data/employers.yml', File::CREAT|File::TRUNC|File::RDWR)
			get_employers(site).each do |p|
				#print p.path
				#print "\n"
			end
		end
		
		def get_employers(site)
			employers = []
			filter_static_files(site, 'employment').each do |f| 
				employers << YAML.load(File.open(f.path, "r:UTF-8").read)
			end
			return employers.sort_by {|p| p["EndDate"].nil? ? p["StartDate"] : p["EndDate"] > p["StartDate"] ? p["EndDate"] : p["StartDate"] }
						    .reverse
		end
	end

	class ProjectsGenerator < HB::Generator
		# Generates the _data/projects.yml file.
		# I wanted to use Jekyll collections but that seems
		# to be broken in the Jekyll version GitHub pages use.
		def generate(site)
			file = File.new(site.config['source'] + '/_data/projects.yml', File::CREAT|File::TRUNC|File::RDWR)
			get_projects(site).each do |project|
				file.puts "- title: " + project['Title']
				file.puts "  start_date: " + project['StartDate'].to_s
				file.puts "  end_date: " + project["EndDate"].to_s
				file.puts "  location: " + project["Location"]
				roles = project["Roles"]
				if roles 
					file.puts "  roles: " + roles
				end
				skills = project["Skills"]
				if skills 
					file.puts "  skills:"
					skills.each do |skill|
						file.puts "  - " + skill
					end
				end
				file.puts "  description: >\n   " + project["Description"]
			end
			file.close
		end
		
		def get_projects(site)
			projects = []
			filter_static_files(site, 'project').each do |f| 
				projects << YAML.load(File.open(f.path, "r:UTF-8").read)
			end
			return projects.sort_by {|p| p["EndDate"].nil? ? p["StartDate"] : p["EndDate"] > p["StartDate"] ? p["EndDate"] : p["StartDate"] }
						   .reverse
		end
	end
end