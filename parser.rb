require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'nokogiri'
end

require 'open-uri'
doc = Nokogiri::HTML(URI.open("https://www.shogi.or.jp/player/"))

players_nodes = doc.search("div .inner")
nodes = players_nodes.search("div .text")
File.open("players.yml", 'a') do |f|
  nodes.each do |node|
    path = node.children.children.first.attributes["href"].value # path to detail
    name = node.search(".ttl").children.children.text # name
    title = node.search("p").last.children.text        # title, class
    f.write(<<~YAML_EOT)
      - name: "#{name}"
        title: "#{title}"
        path: "#{path}"
    YAML_EOT
  end
end
