class ApplicationController < ActionController::API
    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        puts session[:count]
        render json: { count: session[:count] }
    end
end
