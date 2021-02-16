class Experience
  def initialize (xp)
    @id       = xp.id
    @role     = xp['role']
    @from     = xp['start_date']
    @to       = xp['end_date']
    @skills   = xp['skills']
    @mission  = nil

    if @id.start_with? '/employment'
      @name = xp['organization']['name']
      if @id == '/employment/17-self-employed'
        @mission = xp['mission']
        @summary = xp['clients'].map { | client | client['name'] }
      else
        @summary = xp['summary']
      end
    else
      @name = xp['title']
      @summary = xp['summary']
    end
  end

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