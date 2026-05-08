/**
 * TODO: Handle 404 errors
 *
 * Return 404 with { error: { message: "Route not found" } }
 */
export function notFound(req, res) {
  // Your code here

  return res.json({ error: { message: "Route not found" }})
}
