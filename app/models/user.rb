class User < ActiveRecord::Base
  validates :password_digest, :session_token, :username, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validate :ensure_session_token

  def self.secure_token
    SecureRandom::urlsafe_base64
  end

  private
  def ensure_session_token
    self.session_token ||= User.secure_token
  end
end
