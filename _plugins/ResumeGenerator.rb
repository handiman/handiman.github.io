module Jekyll
  Hooks.register :site, :post_render do |site|
    [
      DOCXResume.new(site) #, PDFResume.new(site)
    ].each { |resume| resume.generate }
  end
end