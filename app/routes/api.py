# To change this license header, choose License Headers in Project Properties.
# To change this template file, choose Tools | Templates
# and open the template in the editor.
import app.models.posts as app_posts
import json
from flask import Response, Blueprint


api = Blueprint("api",__name__)


@api.route('/posts/<int:page>/<int:num>/')
def posts(page,num):
    data = app_posts.get_posts(page,num)
    return Response(json.dumps(data),  mimetype='application/json')



