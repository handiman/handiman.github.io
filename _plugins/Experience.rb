class Experience
  def initialize (xp, site)
    @id       = xp.id
    @role     = xp['roles'].is_a?(Array) ? xp['roles'].join(", ") : xp['roles']
    @from     = xp['start_date']
    @to       = xp['end_date']
    @skills   = xp['skills']
    @mission  = nil
    @clients  = site.collections["projects"].docs.reverse.select { | project | project['client'] == true }

    if @id.start_with? '/employment'
      @name = xp['organization']['name']
      if @id == '/employment/17-self-employed'
        @mission = xp['mission']
        @summary = @clients.map{ | client | client['title'] }
      else
        @summary = xp['summary']
      end
    else
      @name = xp['name']
      @summary = xp['summary']
    end  end

  def id 
    @id
  end

  def name 
    @name
  end

  def role
    @role
  end

  def from 
    @from
  end

  def to
    @to
  end
  
  def summary 
    @summary
  end

  def skills 
    @skills 
  end

  def mission
    @mission
  end
end # class Experience