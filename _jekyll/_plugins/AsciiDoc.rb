module AsciiDoc
    def self.dump(cv) <<~ADOC
= #{cv["introduction"]["name"]}
#{cv["introduction"]["jobTitle"]}

== About Me
#{cv["introduction"]["summary"]}
ADOC
    end
end