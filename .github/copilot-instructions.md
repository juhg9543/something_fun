## Repository snapshot

- This repository currently contains only `README.md` and `LICENSE` at the root. `README.md` describes a Spring Boot practice project focused on JWT/OAuth2 and a "pseudo-CTF" interface for learning secure patterns.

## Purpose for AI assistants

Make minimal, discoverable changes and ask the repo owner for clarifications before implementing larger features. This repo appears to be a skeleton — do not assume build tooling or exact Java layout until you find `pom.xml`, `build.gradle`, `src/`, or confirm with the user.

## Quick checklist for getting started

- Search for build files: `pom.xml`, `build.gradle`, `gradlew`, `mvnw`, `settings.gradle`, `gradle.properties`.
- Search for source layout: `src/main/java`, `src/main/resources`, `src/test`.
- If no build files exist, ask the user what build tool and Java version they want (Maven or Gradle; Java 11/17/21 common for Spring Boot).

## When you find a Java/Spring Boot project

- If you find `pom.xml` (Maven): build locally with `mvn -q -DskipTests package` (examples are in `README.md` but not present as files yet).
- If you find Gradle wrapper (`gradlew`): use `./gradlew build` on Unix or `gradlew.bat build` on Windows.
- Look for security/auth examples under `src/main/java` and `src/main/resources` (properties/yaml). Typical files to inspect:
  - `SecurityConfig`, `WebSecurityConfig`, any `Jwt*` classes, `OAuth2*` classes, and controller classes for CTF endpoints.

## Patterns & conventions to follow (project-specific)

- The `README.md` indicates the project focuses on JWT and OAuth2; prioritize authentication-related files for review and tests.
- Expect exploratory or intentionally-vulnerable code (pseudo-CTF). When modifying such code, always:
  1. Preserve the learning/CTF behavior unless asked to harden it. Note which code is intentionally vulnerable in your PR description.
 2. Add tests that document the expected vulnerable behavior before altering it.

## Integration & external dependencies

- Look for dependencies in `pom.xml`/`build.gradle`: Spring Boot starter modules, `spring-security-oauth2`, `jjwt`/`java-jwt`. If not present, confirm before adding new dependencies.

## What to do if files are missing (practical agent steps)

1. Run a repo-wide search for common Java/Spring file names. If nothing appears, ask the user: "Is this repo intended to be a Spring Boot app? Do you have a preferred build tool and Java version?" Provide suggested commands for both Maven and Gradle.
2. If asked to scaffold: propose a minimal Spring Boot skeleton (Maven `pom.xml`, `src/main/java/...`, `application.yml`) and show the small diff before applying.

## Examples of precise searches to run

- `**/pom.xml`, `**/build.gradle`, `**/gradlew*`, `**/src/main/java/**`, `**/src/test/java/**`, `.github/workflows/**`.

## Merge guidance (if this file already exists)

- Preserve existing text. If the repo has a `.github/copilot-instructions.md`, append a short "AI-update" section and call out any contradictions rather than overwriting.

## If you get stuck

- Ask for the missing information (build tool, Java version, intended framework) and provide a short, concrete scaffolding proposal.

---
Please review this draft. Tell me which areas need more detail (build/test commands, expected Java version, or sample files to create) and I will iterate.
