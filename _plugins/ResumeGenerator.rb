module Jekyll
  Hooks.register :site, :post_render do |site|
    if not (Gem.win_platform?)
      [
        DOCXResume.new(site) #, PDFResume.new(site)
      ].each { |resume| resume.generate }
    end
  end
end