module SemanticCV
  def semantic_cv(site) = site.data["semantic-model"] = {
    "summary" => {
      "roles" => all_roles(site),
      "skills" => all_skills(site)
    }
  }

  private

  def all_roles(site) 
    all_roles = Set.new

    site.collections["projects"].docs.each do |doc|
      roles = doc["roles"]
      if roles.is_a?(Array)
        roles.each { |r| all_roles.merge(r.split(",").map(&:strip)) }
      elsif roles.is_a?(String)
        all_roles.merge(roles.split(",").map(&:strip))
      end
    end

    site.collections["employment"].docs.each do |doc|
      roles = doc["roles"]
      if roles.is_a?(Array)
        roles.each { |r| all_roles.merge(r.split(",").map(&:strip)) }
      elsif roles.is_a?(String)
        all_roles.merge(roles.split(",").map(&:strip))
      end
    end

    all_roles.uniq.sort.to_a
  end
  
  def all_skills(site)
    all_skills = Set.new

    site.collections["projects"].docs.each do |doc|
      skills = doc["skills"]
      if skills.is_a?(Array)
        skills.each { |r| all_skills.merge(r.split(",").map(&:strip)) }
      elsif skills.is_a?(String)
        all_skills.merge(skills.split(",").map(&:strip))
      end
    end

    site.collections["employment"].docs.each do |doc|
      skills = doc["skills"]
      if skills.is_a?(Array)
        skills.each { |r| all_skills.merge(r.split(",").map(&:strip)) }
      elsif skills.is_a?(String)
        all_skills.merge(skills.split(",").map(&:strip))
      end
    end

    site.data['profile']['categorizedSkills'].each do | skillCategory |
      all_skills.merge(skillCategory['skills'])
    end

    all_skills.uniq.sort.to_a
  end
end   