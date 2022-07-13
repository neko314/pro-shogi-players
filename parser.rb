require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'nokogiri'
end

require 'open-uri'
doc = Nokogiri::HTML(URI.open("https://www.shogi.or.jp/player/"))

players_nodes = doc.search("div .inner")
nodes = players_nodes.search("div .text")
nodes.each do |node|
  p node.children.children.first.attributes["href"].value # path to detail
  p node.search(".ttl").children.children.text # name
  p node.search("p").last.children.text        # title, class
end
