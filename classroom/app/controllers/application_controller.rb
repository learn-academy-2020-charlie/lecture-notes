class ApplicationController < ActionController::Base
  # all other controllers inherit from this controller
  # rails is looking for an authenticity token but doesn't see one
  skip_before_action :verify_authenticity_token
end
