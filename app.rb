require 'rubygems'
require 'sinatra'
require 'mongo'
require 'json'


DB = Mongo::Connection.new.db("mydb", :pool_size => 5, :timeout => 5)

puts DB

get '/' do
  haml :index, :attr_wrapper => '"', :locals => {:title => 'Guitar Chord App'}
end

get '/todo' do
  haml :todo, :attr_wrapper => '"', :locals => {:title => 'MongoDB Backed TODO App'}
end