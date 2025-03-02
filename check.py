required_libraries = ['whois', 'xgboost', 'favicon', 'beautifulsoup4', 'googlesearch-python']

for library in required_libraries:
    version = next((pkg.version for pkg in pkg_resources.working_set if pkg.project_name.lower() == library.lower()), None)
    print(f"{library}: {version if version else 'Not Installed'}")

