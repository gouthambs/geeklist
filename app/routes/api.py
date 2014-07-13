# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.
import app.models.posts as app_posts
import json
from flask import Response, Blueprint


api = Blueprint("api",__name__)


@api.route('/posts/<int:offset>/<int:num_posts>/<category>/')
def posts(offset,num_posts,category="all"):
    data = app_posts.get_posts(offset,num_posts,category)
    return Response(json.dumps(data),  mimetype='application/json')




