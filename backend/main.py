# main.py — Solo IA Generated Backend
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CRM Pro API", description="A professional AI-powered CRM platform with lead management, deal pipeline, AI scoring, team collaboration, and analytics dashboards", version="1.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.get("/api/health")
def health_check():
    return {"status": "ok", "app": "CRM Pro", "version": "1.0.0", "build": "20260803_024443"}

@app.get("/api/info")
def app_info():
    return {
        "name": "CRM Pro", "description": "A professional AI-powered CRM platform with lead management, deal pipeline, AI scoring, team collaboration, and analytics dashboards",
        "version": "1.0.0", "crm_enabled": true,
        "platforms": ["web", "ios", "android"]
    }
