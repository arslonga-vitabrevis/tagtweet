class TweetTagRelation < ApplicationRecord
  belongs_to :Tweet
  belongs_to :tag
end
