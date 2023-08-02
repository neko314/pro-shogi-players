require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'nokogiri'
end

require 'open-uri'
require 'json'

doc = Nokogiri::HTML(URI.open("https://www.shogi.or.jp/player/"))

players_nodes = doc.search("div .inner")
nodes = players_nodes.search("div .text")
File.open("./data/players.json", "w") do |f|
  players = nodes.map do |node|
    path = node.children.children.first.attributes["href"].value # path to detail
    name = node.search(".ttl").children.children.text # name
    title = node.search("p").last.children.text        # title, class
    
    {
      name: "#{name}",
      title: "#{title}",
      path: "#{path}",
    }
  end
    
  f.write(JSON.pretty_generate({ players: players }))
end
