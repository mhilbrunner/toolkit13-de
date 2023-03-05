# -*- coding: utf-8 -*-
#!/usr/bin/env python

# Requires PyYAML, deepdiff

import yaml
from deepdiff import DeepDiff

def yaml_as_dict(my_file):
    with open(my_file, "r", encoding="utf-8") as fp:
        return yaml.load(fp, Loader=yaml.FullLoader)

def format_key(k):
    k = k.removeprefix("root[")
    k = k.replace("[", ".")
    k = k.replace("'", "")
    k = k.replace("]", "")
    return k

def main():
    de = yaml_as_dict("de.yaml")
    en = yaml_as_dict("en.yaml")
    diff = DeepDiff(de, en, ignore_order=True, report_repetition=True)
    for restype in diff:
        label = ""
        if restype == "values_changed":
            continue
        elif restype == "type_changes":
            label = "Type changed"
        elif restype == "dictionary_item_added":
            label = "Added"
        elif restype == "dictionary_item_removed":
            label = "Removed"
        else:
            label = restype
        for result in diff[restype]:
            print(label + ": " + format_key(result))

if __name__ == "__main__":
    main()
