#!/bin/bash

# Find all .jsx files in the current directory and subdirectories
find . -type f -name "*.jsx" | while read -r file; do
  # Rename each .jsx file to .tsx by replacing the extension
  mv "$file" "${file%.jsx}.tsx"
done

echo "Renaming complete!"