export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/PfeIdeas/newIdea",
        "/PfeIdeas/:id/edite",


    ]
}