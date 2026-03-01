#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_site.py — assembles index.html from part files:
  part1_head_css.html  (doctype → </style>)
  part2_body.html      (<body> ... last section before </body>)
  part3_js.html        (<script> ... </script></body></html>)
"""
import os

base = os.path.dirname(os.path.abspath(__file__))
parts = ["part1_head_css.html", "part2_body.html", "part3_js.html"]
out   = os.path.join(base, "index.html")

with open(out, "w", encoding="utf-8") as f:
    for part in parts:
        path = os.path.join(base, part)
        with open(path, "r", encoding="utf-8") as p:
            f.write(p.read())

print(f"[OK] index.html written ({os.path.getsize(out):,} bytes)")
