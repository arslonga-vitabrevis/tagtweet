class Tag < ApplicationRecord
  has_many :tweet_tag_relations
  has_many :tweets, through: :tweet_tag_relations

  #一意性制約はFormオブジェクトではなくモデルに記載
  validates :name, uniqueness: true
end
