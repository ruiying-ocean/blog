[![Netlify Status](https://api.netlify.com/api/v1/badges/597d4bdd-8685-46b4-92e7-a4f3248d6a62/deploy-status)](https://app.netlify.com/projects/ruiying/deploys)

# Blog

This blog is built with [Hugo](https://gohugo.io/), a fast and flexible static site generator.

## Local Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended version recommended)

### Running Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blog
   ```

2. Initialize and update the FixIt theme submodule:
   ```bash
   git submodule update --init --recursive
   ```

3. Start the Hugo development server:
   ```bash
   hugo server
   ```

3. Open your browser and navigate to `http://localhost:1313`

The site will automatically reload when you make changes to the content or configuration.

### Building for Production

To build the static site for production:

```bash
hugo
```

The generated site will be available in the `public/` directory.