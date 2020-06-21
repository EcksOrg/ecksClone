# EC Test File
# LLDM/logger.py
# Example Python Class

import os, progressbar

class Logger:
    def __init__(self, module):
        self.module = module
    
    def info(self, message):
        print(f"INFO [{self.module}] {message}")
    
    def error(self, message):
        print(f"ERR [{self.module}] {message}")
    
    def verbose(self, message):
        if 'LLDM_VERBOSE' not in os.environ: return

        if os.environ['LLDM_VERBOSE'] == "1":
            print(f"VERB [{self.module}] {message}")

    def create_progress(self, steps):
        return progressbar.ProgressBar(max_value=steps)