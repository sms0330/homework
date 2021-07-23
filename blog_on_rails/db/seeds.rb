Post.destroy_all
Comment.destroy_all

100.times do
    created_at = Faker::Date.backward(days:365 * 5)
        p = Post.create(
        title: Faker::Company.industry,
        body: Faker::ChuckNorris.fact,
        created_at: created_at,
        updated_at: created_at
        )
        if p.valid?
            rand(1..10).times.map do
                Comment.create(body: Faker::GreekPhilosophers.quote, post: p)
            end
        end
end

posts = Post.all
comments = Comment.all

puts "Generated #{posts.count} posts"
puts "Generated #{comments.count} comments"