class User < ActiveRecord::Base
  validates :password_digest, :username, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validate :ensure_session_token

  attr_reader :password

  def self.secure_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    end

    return nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private
  def ensure_session_token
    self.session_token ||= User.secure_token
  end
end
