# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.
import datetime

def get_posts(offset,num_posts,category):
    posts =  [{'title' : str(i)+'-How i met your mother', 
    'summary' : 'This is a horrible story. Really bad way of meeting any mother.',
    'url' : 'http://google.com',
    'source' : 'medium.com' 
    } for i in range(offset,offset+num_posts)]
    return posts
    
    
    


