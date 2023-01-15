# -*- coding: utf-8 -*-
#!/usr/bin/env python

# Requires PyYAML

import yaml
import json

with open('de.yaml', 'r', encoding="utf-8") as file:
    input = yaml.safe_load(file)

    with open('../languages/de.json', 'w', encoding="utf-8") as json_file:
        json.dump(input, json_file, indent=2, ensure_ascii=False)
