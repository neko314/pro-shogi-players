require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'
  gem 'nokogiri'
end

require 'open-uri'
require 'json'

File.open("./data/players.json", "w") do |f|
  players = (1..10).map do |no|
    doc = Nokogiri::HTML(URI.open("https://www.shogi.or.jp/player/pro/#{no}.html"))

    name = doc.search(".nameTtl").search("span").search(".jp").text
    break unless name

    title = doc.search(".ico03").text
    teacher = doc.search("td")[3].text # class, id では絞り込めない

    {
      no:,
      name:,
      title:,
      teacher:,
    }
  end

  f.write(JSON.pretty_generate({ players: players }))
end
