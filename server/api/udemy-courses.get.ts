export default defineEventHandler(async (event) => {

  // get all courses from udemy using bearer token
  const BASE_URL = 'https://www.udemy.com/instructor-api/v1';
  const fields = 'fields%5Bcourse%5D=is_published,num_reviews,rating,title,url,headline,description&ordering=admin_rating';
  const url = `${BASE_URL}/taught-courses/courses?${fields}`;

  const courses = await $fetch(url, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.UDEMY_SECRET}`
    }
  })

  return courses
})
