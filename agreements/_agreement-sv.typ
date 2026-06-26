#set document(title: "Konsultavtal")
#let data = yaml(sys.inputs.yaml)
#let template = "_agreement-" + data.lang + "-v" + str(data.version) + ".typ"
#import template: agreement
#show: agreement.with(agreement: data)
